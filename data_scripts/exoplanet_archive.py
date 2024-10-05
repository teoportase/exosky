import pyvo as vo
import json

archive = vo.dal.TAPService("https://exoplanetarchive.ipac.caltech.edu/TAP")

# Relevant information:
#  - pl_name = Planet name
#  - hostname = Host star name
#  - ra = Right Ascension of planetary system in decimal degrees
#  - deg = Declination of planetary system in decimal degrees
#  - glat, glon = Galactic latitude & longitude of planetary system in decimal degrees
#  - elat, elon = Ecliptic latitude & longitude of planetary system in decimal degrees
#  - ps = planetary system data set

query = """
    SELECT UNIQUE(pl_name), hostname, ra, dec, glat, glon, elat, elon
    FROM ps
"""

resultset = archive.search(query)

file_path = "../data/exoplanet_archive.json"

all_info = []

for result in resultset:
    row = {
        "pl_name": result["pl_name"],
        "hostname": result["hostname"],
        "ra": result["ra"],
        "dec": result["dec"],
        "glat": result["glat"],
        "glon": result["glon"],
        "elat": result["elat"],
        "elon": result["elon"]
    }
    all_info.append(row)

with open(file_path, 'w') as file:
    json.dump(all_info, file)