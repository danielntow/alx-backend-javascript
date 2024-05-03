#!/usr/bin/env python3

"""
Module: kv_operations

This module provides functions for key-value operations.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple where the first element is the string k and the second
    element is the square of the int or float v.

    Args:
        k (str): The string key.
        v (Union[int, float]): The int or float value.

    Returns:
        Tuple[str, float]: A tuple containing the string k and the square of v.
    """
    return (k, float(v) ** 2)
