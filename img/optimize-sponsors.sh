#!/bin/bash

# Navigate to sponsors directory
SCRIPTDIR="$(realpath "${0}")"
DIR="$(dirname "${SCRIPTDIR}")"
cd "${DIR}/sponsors"

# Convert PNGs
for sponsor in *.png; do
  convert -geometry x400 -strip -quality 86 \
  "$sponsor" "resize-$sponsor"
done

# Convert JPGs
for sponsor in *.jpg; do
  convert -geometry x400 -strip -quality 86 \
  "$sponsor" "resize-$sponsor"
done