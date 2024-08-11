  // data/scriptData.js
  export const response = `

Here is a Python script that computes a Hohmann transfer orbit from Earth to the Moon:


  '''
import numpy as np
from scipy.optimize import minimize

# Define the gravitational constants
G = 6.67430e-11  # m^3 kg^-1 s^-2
M_earth = 5.97237e24  # kg
M_moon = 7.349e22  # kg

# Define the initial and final orbits
r_earth = 6371e3  # m (Earth's radius)
a_earth = r_earth  # m (semi-major axis of Earth's orbit)
e_earth = 0.01671  # (eccentricity of Earth's orbit)

r_moon = 1737e3  # m (Moon's radius)
a_moon = 384400e3  # m (semi-major axis of Moon's orbit)
e_moon = 0.0549  # (eccentricity of Moon's orbit)

# Define the time of flight (TOF) as a variable
t_of = 7.76e3  # s (approximately the time it takes for a spacecraft to travel from Earth to Moon)

# Define the function to minimize (the Hohmann transfer orbit's energy)
def hohmann_energy(v0, v1):
    # Compute the semi-major axes of the transfer orbit
    a_transfer = (a_earth * M_earth + a_moon * M_moon) / (M_earth + M_moon)
    
    # Compute the energy of the transfer orbit
    E_transfer = -G * (M_earth + M_moon) / (2 * a_transfer)
    
    # Compute the velocity at the Earth's surface
    v0_earth = np.sqrt(G * M_earth / r_earth)
    
    # Compute the velocity at the Moon's surface
    v1_moon = np.sqrt(G * M_moon / r_moon)
    
    # Compute the energy of the initial and final orbits
    E_earth = -G * M_earth / (2 * a_earth)
    E_moon = -G * M_moon / (2 * a_moon)
    
    # Compute the total energy of the system
    E_total = E_earth + E_moon + E_transfer
    
    # Compute the difference between the total energy and the initial energy
    delta_E = E_total - E_earth
    
    # Return the difference between the total energy and the initial energy
    return delta_E

# Minimize the energy function with respect to the initial velocity
res = minimize(hohmann_energy, 10, method="SLSQP", args=(v1_moon,))

# Print the result
print("Initial velocity:", res.x[0], "m/s")
print("Final velocity:", v1_moon, "m/s")
print("Time of flight:", t_of, "s")
'''

This script uses the scipy.optimize module to minimize the energy function of the Hohmann transfer orbit with respect to the initial velocity. The energy function is defined as the difference between the total energy of the system and the initial energy of the Earth's orbit.

The script first defines the gravitational constants, the masses of the Earth and Moon, and the radii of the Earth and Moon. It then defines the initial and final orbits, including their semi-major axes and eccentricities.

The script then defines the time of flight (TOF) as a variable, which is set to approximately 7.76 hours, which is the time it takes for a spacecraft to travel from Earth to Moon.

The script then defines the energy function hohmann_energy, which computes the semi-major axis of the transfer orbit, the energy of the transfer orbit, and the energies of the initial and final orbits. It then computes the total energy of the system and returns the difference between the total energy and the initial energy.

Finally, the script minimizes the energy function with respect to the initial velocity using the minimize function from scipy.optimize. The result is printed to the console, including the initial velocity, final velocity, and time of flight.

Note that this script assumes a simplified model of the Earth-Moon system, where the Earth and Moon are treated as point masses and the gravitational constant is assumed to be constant. In reality, the Earth and Moon have complex shapes and the gravitational constant varies slightly due to the motion of the Earth and Moon.
`;




export const responseTable={
  "header": [
    "Name",
    "Manufacturer",
    "Cost (USD)",
    "TRL",
    "Mass (kg)",
    "Max Torque (Nm)",
    "Max Momentum (Nms)",
    "Peak Power (W)",
    "Avg Power (W)",
    "Length (mm)",
    "Width (mm)",
    "Height (mm)",
    "Operating Temp (°C)",
    "Radiation Tolerance",
    "Flight Heritage"
  ],
  "rows": [
    {
      "Name": "RW222 CubeSat Reaction Wheels",
      "Manufacturer": "AAC Clyde Space",
      "Cost (USD)": "",
      "TRL": "9",
      "Mass (kg)": "0.215",
      "Max Torque (Nm)": "0.002",
      "Max Momentum (Nms)": "0.015",
      "Peak Power (W)": "5.0",
      "Avg Power (W)": "1.7",
      "Length (mm)": "25",
      "Width (mm)": "25",
      "Height (mm)": "15",
      "Operating Temp (°C)": "-20 to 60",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "Reaction Wheel",
      "Manufacturer": "arcsec",
      "Cost (USD)": "",
      "TRL": "6",
      "Mass (kg)": "",
      "Max Torque (Nm)": "0.0005",
      "Max Momentum (Nms)": "0.004",
      "Peak Power (W)": "0.6",
      "Avg Power (W)": "0.2",
      "Length (mm)": "40",
      "Width (mm)": "40",
      "Height (mm)": "28.9",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "Reaction Wheel Unit W45E",
      "Manufacturer": "Bradford Space",
      "Cost (USD)": "5000",
      "TRL": "9",
      "Mass (kg)": "2.6",
      "Max Torque (Nm)": "0.2",
      "Max Momentum (Nms)": "4.0",
      "Peak Power (W)": "48",
      "Avg Power (W)": "",
      "Length (mm)": "258",
      "Width (mm)": "181",
      "Height (mm)": "143",
      "Operating Temp (°C)": "-30 to 50",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "RW250B - Momentum Wheel 25Nms B",
      "Manufacturer": "O.C.E. Technology",
      "Cost (USD)": "",
      "TRL": "9",
      "Mass (kg)": "8.5",
      "Max Torque (Nm)": "0.075",
      "Max Momentum (Nms)": "25",
      "Peak Power (W)": "90",
      "Avg Power (W)": "25",
      "Length (mm)": "",
      "Width (mm)": "260",
      "Height (mm)": "106",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "Reaction Wheel 60",
      "Manufacturer": "COMAT",
      "Cost (USD)": "5000",
      "TRL": "",
      "Mass (kg)": "0.27",
      "Max Torque (Nm)": "0.006",
      "Max Momentum (Nms)": "0.06",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "",
      "Width (mm)": "65.6",
      "Height (mm)": "44.8",
      "Operating Temp (°C)": "-30 to 50",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "Reaction Wheels 40",
      "Manufacturer": "COMAT",
      "Cost (USD)": "8000",
      "TRL": "7",
      "Mass (kg)": "0.23",
      "Max Torque (Nm)": "0.004",
      "Max Momentum (Nms)": "0.04",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "67",
      "Width (mm)": "67",
      "Height (mm)": "44.8",
      "Operating Temp (°C)": "-30 to 50",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "RW500 - SGCMG-50Nms",
      "Manufacturer": "O.C.E. Technology",
      "Cost (USD)": "4500",
      "TRL": "9",
      "Mass (kg)": "21.8",
      "Max Torque (Nm)": "12",
      "Max Momentum (Nms)": "50",
      "Peak Power (W)": "80",
      "Avg Power (W)": "30",
      "Length (mm)": "334",
      "Width (mm)": "506.8",
      "Height (mm)": "295",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "LIBRA-2 Reaction Wheel",
      "Manufacturer": "NewSpace Systems",
      "Cost (USD)": "",
      "TRL": "",
      "Mass (kg)": "2.8",
      "Max Torque (Nm)": "0.09",
      "Max Momentum (Nms)": "1.47",
      "Peak Power (W)": "",
      "Avg Power (W)": "4.8",
      "Length (mm)": "70",
      "Width (mm)": "150",
      "Height (mm)": "150",
      "Operating Temp (°C)": "-10 to 58",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "RW400 CubeSat Reaction Wheels",
      "Manufacturer": "AAC Clyde Space",
      "Cost (USD)": "",
      "TRL": "",
      "Mass (kg)": "0.375",
      "Max Torque (Nm)": "0.012",
      "Max Momentum (Nms)": "0.05",
      "Peak Power (W)": "15",
      "Avg Power (W)": "",
      "Length (mm)": "50",
      "Width (mm)": "50",
      "Height (mm)": "27",
      "Operating Temp (°C)": "-40 to 60",
      "Radiation Tolerance": "36 krad",
      "Flight Heritage": ""
    },
    {
      "Name": "Reaction Wheels 20",
      "Manufacturer": "COMAT",
      "Cost (USD)": "25000",
      "TRL": "",
      "Mass (kg)": "0.18",
      "Max Torque (Nm)": "0.002",
      "Max Momentum (Nms)": "0.02",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "48",
      "Width (mm)": "48",
      "Height (mm)": "28.2",
      "Operating Temp (°C)": "-30 to 50",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "LIBRA-065 Reaction Wheel",
      "Manufacturer": "NewSpace Systems",
      "Cost (USD)": "20000",
      "TRL": "9",
      "Mass (kg)": "1.55",
      "Max Torque (Nm)": "0.02",
      "Max Momentum (Nms)": "0.65",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "102",
      "Width (mm)": "102",
      "Height (mm)": "105",
      "Operating Temp (°C)": "-20 to 60",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "Trillian-1 Reaction Wheel",
      "Manufacturer": "AAC Clyde Space",
      "Cost (USD)": "",
      "TRL": "9",
      "Mass (kg)": "1.5",
      "Max Torque (Nm)": "0.0471",
      "Max Momentum (Nms)": "1.2",
      "Peak Power (W)": "24",
      "Avg Power (W)": "",
      "Length (mm)": "135",
      "Width (mm)": "135",
      "Height (mm)": "82",
      "Operating Temp (°C)": "-10 to 50",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "WHL-500 Reaction Wheel",
      "Manufacturer": "VEOWARE SPACE",
      "Cost (USD)": "",
      "TRL": "7",
      "Mass (kg)": "0.8",
      "Max Torque (Nm)": "0.1",
      "Max Momentum (Nms)": "0.5",
      "Peak Power (W)": "",
      "Avg Power (W)": "3",
      "Length (mm)": "97",
      "Width (mm)": "97",
      "Height (mm)": "40",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "WHL-200 Reaction Wheel",
      "Manufacturer": "VEOWARE SPACE",
      "Cost (USD)": "25000",
      "TRL": "",
      "Mass (kg)": "0.423",
      "Max Torque (Nm)": "0.025",
      "Max Momentum (Nms)": "0.2",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "70",
      "Width (mm)": "70",
      "Height (mm)": "45",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "WHL-100 Reaction Wheel",
      "Manufacturer": "VEOWARE SPACE",
      "Cost (USD)": "20000",
      "TRL": "",
      "Mass (kg)": "0.35",
      "Max Torque (Nm)": "0.02",
      "Max Momentum (Nms)": "0.1",
      "Peak Power (W)": "",
      "Avg Power (W)": "1",
      "Length (mm)": "60",
      "Width (mm)": "60",
      "Height (mm)": "45",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "RW150 - Reaction Wheel 15Nms",
      "Manufacturer": "O.C.E. Technology",
      "Cost (USD)": "",
      "TRL": "9",
      "Mass (kg)": "7",
      "Max Torque (Nm)": "0.15",
      "Max Momentum (Nms)": "15",
      "Peak Power (W)": "75",
      "Avg Power (W)": "8",
      "Length (mm)": "",
      "Width (mm)": "290",
      "Height (mm)": "113",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "LIBRA-6 Reaction Wheel",
      "Manufacturer": "NewSpace Systems",
      "Cost (USD)": "",
      "TRL": "7",
      "Mass (kg)": "5",
      "Max Torque (Nm)": "0.3",
      "Max Momentum (Nms)": "7.83",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "100",
      "Width (mm)": "210",
      "Height (mm)": "210",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "RW40 - Reaction Wheel 4Nms",
      "Manufacturer": "O.C.E. Technology",
      "Cost (USD)": "",
      "TRL": "",
      "Mass (kg)": "2.9",
      "Max Torque (Nm)": "0.1",
      "Max Momentum (Nms)": "4",
      "Peak Power (W)": "100",
      "Avg Power (W)": "7.5",
      "Length (mm)": "",
      "Width (mm)": "178",
      "Height (mm)": "72",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
    {
      "Name": "RW250 - Reaction Wheel 25Nms",
      "Manufacturer": "O.C.E. Technology",
      "Cost (USD)": "",
      "TRL": "7",
      "Mass (kg)": "10",
      "Max Torque (Nm)": "0.2",
      "Max Momentum (Nms)": "25",
      "Peak Power (W)": "120",
      "Avg Power (W)": "10",
      "Length (mm)": "",
      "Width (mm)": "312",
      "Height (mm)": "121",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": ""
    },
    {
      "Name": "RW1000 Reaction Wheel",
      "Manufacturer": "O.C.E. Technology",
      "Cost (USD)": "",
      "TRL": "",
      "Mass (kg)": "10",
      "Max Torque (Nm)": "1",
      "Max Momentum (Nms)": "11",
      "Peak Power (W)": "160",
      "Avg Power (W)": "15",
      "Length (mm)": "",
      "Width (mm)": "337",
      "Height (mm)": "121",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Flight Heritage": "Yes"
    },
   {
      "Name": "RW5 - Single Axis Micro Wheel 500mNms",
      "Manufacturer": "O.C.E. Technology",
      "Country": "Ireland",
      "Cost (USD)": "",
      "TRL": "",
      "Flight Heritage": "Yes",
      "Mass (kg)": "1.3",
      "Max Torque (Nm)": "0.018",
      "Peak Power (W)": "27",
      "Avg Power (W)": "6.5",
      "Length (mm)": "110",
      "Width (mm)": "110",
      "Height (mm)": "97",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Max Momentum Storage (Nms)": "0.5"
    },
    {
      "Name": "GEN1: CubeWheel Medium",
      "Manufacturer": "CubeSpace",
      "Country": "South Africa",
      "Cost (USD)": "7540",
      "TRL": "9",
      "Flight Heritage": "Yes",
      "Mass (kg)": "0.15",
      "Max Torque (Nm)": "0.001",
      "Peak Power (W)": "2.3",
      "Avg Power (W)": "0.19",
      "Length (mm)": "46",
      "Width (mm)": "46",
      "Height (mm)": "31.5",
      "Operating Temp (°C)": "-10 to 60",
      "Radiation Tolerance": "24 krad",
      "Max Momentum Storage (Nms)": "0.01082"
    },
    {
      "Name": "GEN1: CubeWheel Small",
      "Manufacturer": "CubeSpace",
      "Country": "South Africa",
      "Cost (USD)": "5170",
      "TRL": "9",
      "Flight Heritage": "Yes",
      "Mass (kg)": "0.06",
      "Max Torque (Nm)": "0.00023",
      "Peak Power (W)": "0.65",
      "Avg Power (W)": "0.15",
      "Length (mm)": "28",
      "Width (mm)": "28",
      "Height (mm)": "26.2",
      "Operating Temp (°C)": "-10 to 60",
      "Radiation Tolerance": "24 krad",
      "Max Momentum Storage (Nms)": "0.00177"
    },
    {
      "Name": "GEN1: CubeWheel Large",
      "Manufacturer": "CubeSpace",
      "Country": "South Africa",
      "Cost (USD)": "8640",
      "TRL": "9",
      "Flight Heritage": "Yes",
      "Mass (kg)": "0.225",
      "Max Torque (Nm)": "0.0023",
      "Peak Power (W)": "4.5",
      "Avg Power (W)": "0.35",
      "Length (mm)": "57",
      "Width (mm)": "57",
      "Height (mm)": "31.5",
      "Operating Temp (°C)": "-10 to 60",
      "Radiation Tolerance": "24 krad",
      "Max Momentum Storage (Nms)": "0.0306"
    },
    {
      "Name": "GEN1: CubeWheel Small Plus",
      "Manufacturer": "CubeSpace",
      "Country": "South Africa",
      "Cost (USD)": "6550",
      "TRL": "9",
      "Flight Heritage": "Yes",
      "Mass (kg)": "0.09",
      "Max Torque (Nm)": "0.0023",
      "Peak Power (W)": "2.3",
      "Avg Power (W)": "0.19",
      "Length (mm)": "33.4",
      "Width (mm)": "33.4",
      "Height (mm)": "29.7",
      "Operating Temp (°C)": "-10 to 60",
      "Radiation Tolerance": "24 krad",
      "Max Momentum Storage (Nms)": "0.0036"
    },
    {
      "Name": "GEN2: CubeWheel - CW0057",
      "Manufacturer": "CubeSpace",
      "Country": "South Africa",
      "Cost (USD)": "7220",
      "TRL": "",
      "Flight Heritage": "",
      "Mass (kg)": "0.057",
      "Max Torque (Nm)": "",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "",
      "Width (mm)": "",
      "Height (mm)": "",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Max Momentum Storage (Nms)": ""
    },
    {
      "Name": "GEN2: CubeWheel - CW0017",
      "Manufacturer": "CubeSpace",
      "Country": "South Africa",
      "Cost (USD)": "5170",
      "TRL": "",
      "Flight Heritage": "",
      "Mass (kg)": "0.017",
      "Max Torque (Nm)": "",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "",
      "Width (mm)": "",
      "Height (mm)": "",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Max Momentum Storage (Nms)": ""
    },
    {
      "Name": "GEN2: CubeWheel - CW0162",
      "Manufacturer": "CubeSpace",
      "Country": "South Africa",
      "Cost (USD)": "8950",
      "TRL": "",
      "Flight Heritage": "",
      "Mass (kg)": "0.162",
      "Max Torque (Nm)": "",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "",
      "Width (mm)": "",
      "Height (mm)": "",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Max Momentum Storage (Nms)": ""
    },
    {
      "Name": "RW-0.03",
      "Manufacturer": "Sinclair Interplanetary",
      "Country": "Canada",
      "Cost (USD)": "25000",
      "TRL": "9",
      "Flight Heritage": "Yes",
      "Mass (kg)": "",
      "Max Torque (Nm)": "",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "",
      "Width (mm)": "",
      "Height (mm)": "",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Max Momentum Storage (Nms)": "0.03"
    },
    {
      "Name": "RW-0.01",
      "Manufacturer": "Sinclair Interplanetary",
      "Country": "Canada",
      "Cost (USD)": "20000",
      "TRL": "9",
      "Flight Heritage": "Yes",
      "Mass (kg)": "",
      "Max Torque (Nm)": "",
      "Peak Power (W)": "",
      "Avg Power (W)": "",
      "Length (mm)": "",
      "Width (mm)": "",
      "Height (mm)": "",
      "Operating Temp (°C)": "",
      "Radiation Tolerance": "",
      "Max Momentum Storage (Nms)": "0.01"
    }
  ]
}