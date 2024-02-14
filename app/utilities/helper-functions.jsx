// #################### PHOTOGRAPHY.JSX ####################

export function handleNumberOfColumns(windowWidth) {
    if (windowWidth <= 800) {
        return [1, 2];
    } else {
        return [1, 2, 3, 4];
    }
}

export function handleIndex(windowWidth) {
    if (windowWidth <= 800) {
        return 2;
    } else {
        return 4;
    }
}

export function handlePriority(imageIndex) {
    if (imageIndex < 5) {
        return true;
    } else {
        return false;
    }
}

// #################### PHOTOGRAPHY/[slug].JSX ####################

export function handleNextPage(array, id) {
    if (id + 1 <= array.length ) {
        return id + 1;
    } else {
        return id;
    }
}

export function handlePreviousPage(id) {
    if (id - 1 >> 0) {
        return id - 1;
    } else {
        return id;
    }
}

export function handleNextButton(array, id) {
    if (id + 1 <= array.length ) {
        return true;
    } else {
        return false;
    }
}

export function handlePreviousButton(id) {
    if (id - 1 >> 0) {
        return true;
    } else {
        return false;
    }
}