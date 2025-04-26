#!/usr/bin/env bash
# generate_html.sh
# Usage: ./generate_html.sh /chemin/vers/img > galerie.html

set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <dossier_images>" >&2
  exit 1
fi

dir="$1"

# On récupère juste le nom du dossier (ex: "img"), même si l'utilisateur a mis un chemin absolu
out_dir=$(basename "$dir")

# Pour que les globs '*.jpg' vides ne ressortent pas littéralement
shopt -s nullglob

for img in "$dir"/*.{jpg,jpeg,png,gif}; do
  [ -f "$img" ] || continue

  fname=$(basename "$img")           # ex. "P1110977.jpg"
  title="${fname%.*}"                # ex. "P1110977"

  cat <<HTML
<div class="window">
  <div class="titlebar">
    <span>$title</span>
    <span class="close-btn">✕</span>
  </div>
  <div class="content"></div>
  <img src="./$out_dir/$fname" alt="$title" draggable="false">
</div>
HTML

done

