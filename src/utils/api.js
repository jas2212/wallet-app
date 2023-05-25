export const fetchTransactionList = async (page, offset) => {
  const data = await fetch(
    `https://api.bscscan.com/api?module=account&action=txlist&address=0xF426a8d0A94bf039A35CEE66dBf0227A7a12D11e&startblock=0&endblock=99999999&page=${page}&offset=${offset}&sort=asc&apikey=ZFJVQFPYD1P3JBPWVZFTYNKSY17JIQSCKA`
  );
  const response = await data.json();
  const transactionData = response.result.map((item) => ({
    transactionHash: item.hash,
    value: parseFloat(item.value) / 1e18,
    from: item.from,
    to: item.to,
    blockNumber: item.blockNumber,
  }));
  console.log(page, offset, transactionData)
  return transactionData;
};