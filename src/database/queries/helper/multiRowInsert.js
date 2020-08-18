const multiRowInsert = (arr, forignId) => {
  let count = 1;
  let preparedStatment = '';
  const values = [];

  arr.forEach(item => {
    preparedStatment += '(';
    if (forignId) preparedStatment += `$${count},`;
    count += 1;

    values.push(forignId, item);
    preparedStatment += `$${count},`;
    count += 1;

    preparedStatment = `${preparedStatment.slice(0, -1)}),`;
  });
  preparedStatment = preparedStatment.slice(0, -1);

  return { preparedStatment, values };
};

module.exports = multiRowInsert;

const { preparedStatment, values } = multiRowInsert(['mossa', 'sameer'], 1);
console.log(preparedStatment, values);
