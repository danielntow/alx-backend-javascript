#!/usr/bin/env python3

"""
Module: multiplier_functions

This module provides functions for creating multiplier functions.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a multiplier function that multiplies a float by the given
    multiplier.

    Args:
        multiplier (float): The multiplier value.

    Returns:
        Callable[[float], float]: A function that takes a float and
        returns the result of multiplying the float by the multiplier.
    """
    def multiplier_function(x: float) -> float:
        """
        Multiply a float by the given multiplier.

        Args:
            x (float): The input float.

        Returns:
            float: The result of multiplying x by the multiplier.
        """
        return x * multiplier

    return multiplier_function
