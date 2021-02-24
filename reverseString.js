const reverse = str => str.length < 1 ? '' : str[str.length - 1] + reverse(str.substr(0, str.length - 1))
