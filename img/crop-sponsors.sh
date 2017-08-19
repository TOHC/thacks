#!/bin/bash

# Navigate to sponsors directory
SCRIPTDIR="$(realpath "${0}")"
DIR="$(dirname "${SCRIPTDIR}")"
cd "${DIR}/sponsors"

# Convert PNGs
for sponsor in *.png; do
  convert -trim "$sponsor" "$sponsor"
done

# Convert JPGs
for sponsor in *.jpg; do
  convert -trim "$sponsor" "$sponsor"
done