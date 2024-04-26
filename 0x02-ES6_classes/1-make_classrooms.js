import ClassRoom from './0-classroom'

/**
 * Initializes an array of ClassRoom instances with different sizes.
 *
 * @returns {ClassRoom[]} An array of ClassRoom instances.
 */
export default function initializeRooms () {
  return ([new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)])
}
