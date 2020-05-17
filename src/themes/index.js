const formatDate = string => {
    const date = new Date(string);

    return new Intl.DateTimeFormat('pl').format(date);
}

export default formatDate