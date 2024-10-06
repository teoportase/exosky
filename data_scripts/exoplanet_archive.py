import pyvo as vo
import json
import numpy

archive = vo.dal.TAPService("https://exoplanetarchive.ipac.caltech.edu/TAP")

# Relevant information:
#  - pl_name = Planet name
#  - hostname = Host star name
#  - sy_snum = Number of stars in planetary system
#  - pl_orbper = Orbital period of planet in Earth days
#  - pl_rade = Radius of planet compared to Earth's radius
#  - ra = Right Ascension of planetary system in decimal degrees
#  - deg = Declination of planetary system in decimal degrees
#  - sy_dist = Distance to planetary system in parsecs
#  - ps = planetary system data set

query = """
    SELECT UNIQUE(pl_name), hostname, sy_snum, pl_orbper, pl_rade, ra, dec, sy_dist
    FROM ps
"""

resultset = archive.search(query)

file_path = "../data/exoplanet_archive.json"

all_info = []

for result in resultset:
    row = {
        "pl_name": result["pl_name"],
        "hostname": result["hostname"],
        "sy_snum": int(result["sy_snum"]),
        "pl_orbper": -1 if numpy.isnan(result["pl_orbper"]) else result["pl_orbper"],
        "pl_rade": -1 if numpy.isnan(result["pl_rade"]) else result["pl_rade"],
        "ra": result["ra"],
        "dec": result["dec"],
        "sy_dist": -1 if numpy.isnan(result["sy_dist"]) else result["sy_dist"]
    }
    all_info.append(row)

with open(file_path, 'w') as file:
    json.dump(all_info, file)