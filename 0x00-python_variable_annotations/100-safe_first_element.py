#!/usr/bin/env python3

"""
Module: list_operations

This module provides functions for list operations.
"""

from typing import Any, List, Union


def safe_first_element(lst: List[Any]) -> Union[Any, None]:
    """
    Return the first element of a list if it exists, otherwise return None.

    Args:
        lst (List[Any]): The input list.

    Returns:
        Union[Any, None]: The first element of the list if it
        exists, otherwise None.
    """
    if lst:
        return lst[0]
    else:
        return None
