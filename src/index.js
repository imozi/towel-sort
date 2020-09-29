// You should implement your task here.

module.exports = function towelSort(matrix) {
    let isEnd = false;

    return matrix
        ? matrix.reduce((a, e) => {
              if (isEnd) {
                  a = [...a, ...e.reverse()];
                  isEnd = false;
                  return a;
              }

              a = [...a, ...e];
              isEnd = true;
              return a;
          }, [])
        : [];
};
