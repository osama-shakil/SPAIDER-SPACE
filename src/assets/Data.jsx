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