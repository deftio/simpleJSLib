# command line to emit sub resource integrity
# this is useful for generating checksums that browsers can use for making sure your library is signed correctly.
# -MC 2018
openssl dgst -sha384 -binary jsumd.js | openssl base64 -A
