from typing import TypeVar, Dict, Any, Optional

# Define a type variable for the value type of the dictionary
V = TypeVar('V')


def safely_get_value(
    dct: Dict[Any, V], key: Any, default:
        Optional[V] = None) -> Optional[V]:
    """
    Safely get a value from a dictionary by key.

    Args:
        dct (Dict[Any, V]): The input dictionary.
        key (Any): The key to look up in the dictionary.
        default (Optional[V], optional): The default value to return
        if the key is not found. Defaults to None.

    Returns:
        Optional[V]: The value corresponding to the key if found,
        otherwise the default value.
    """
    if key in dct:
        return dct[key]
    else:
        return default
