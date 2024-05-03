#!/usr/bin/env python3

"""
Module: array_operations

This module provides functions for manipulating arrays.
"""

from typing import Tuple, List


def zoom_array(lst: Tuple[int, ...], factor: int = 2) -> Tuple[int, ...]:
    """
    Zoom in on an array by duplicating each element a specified
    number of times.

    Args:
        lst (Tuple[int, ...]): The input tuple of integers.
        factor (int, optional): The zoom factor. Defaults to 2.

    Returns:
        Tuple[int, ...]: The zoomed-in tuple.
    """
    zoomed_in: List[int] = [
        item for item in lst
        for i in range(factor)
    ]
    return tuple(zoomed_in)


array = (12, 72, 91)

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)  # Change the factor to an integer

print(zoom_array.__annotations__)
