/**
 * Vector3D class with functionalities to do calculations
 */
export class Vector3D {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * Get the magnitude of the vector
	 * @returns {number}
	 */
	magnitude() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
	}
}