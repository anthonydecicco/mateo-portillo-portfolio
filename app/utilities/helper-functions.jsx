// #################### PHOTOGRAPHY.JSX ####################

export function handleNumberOfColumns(windowWidth) {
    if (windowWidth <= 800) {
        return [1, 2];
    } else {
        return [1, 2, 3, 4];
    }
}
//If a user's window width is less than or equal to 800, return 2 columns in the array.
//Return 4 if else is true. This function is important as only including 4 columns results in
//odd photo formatting and alignment with gaps in the grid. Allowing for 2 or 4 will change which
//column a photo is eventually rendered in based on the screen size.

export function handleIndex(windowWidth) {
    if (windowWidth <= 800) {
        return 2;
    } else {
        return 4;
    }
}
//After handling the number of columns based on a user's window width, images must be mapped to the
//correct column. The array of images is first filtered based on the index that is equal to the 
//columnIndex, the resulting image, which is now "grouped" with the corresponding column, is then
//mapped within that column. 

//The index is calculated by adding the remainder of index / 2 (or 4 depending on window width) + 1. 
//For example, if the columnIndex is 2, if window width is 750, and it is the 15th image in the array, 
//the resulting function is: 15/2 which leaves a remainder of 1. Then, 1 + 1 === 2, resulting in the 
//image being mapped in the second column.

export function handlePriority(imageIndex) {
    if (imageIndex < 5) {
        return true;
    } else {
        return false;
    }
}
//prioritize the first 4 images in each column

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