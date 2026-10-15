#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p assets/classic
python3 - <<'PY2'
import csv,subprocess,os
with open('meme_manifest.csv',newline='') as f:
 for row in csv.DictReader(f):
  if not row['source_url']:continue
  out=os.path.join('assets',row['category'],row['filename'])
  if os.path.isfile(out) and os.path.getsize(out)>1000:continue
  result=subprocess.run(['curl','-fL','--retry','2','--connect-timeout','12','--max-time','35','-A','Mozilla/5.0','-o',out,row['source_url']],capture_output=True)
  if result.returncode or not os.path.isfile(out) or os.path.getsize(out)<1000:
   if os.path.isfile(out):os.remove(out)
   print('FAILED:',row['filename'])
  else:print('OK:',row['filename'])
PY2
