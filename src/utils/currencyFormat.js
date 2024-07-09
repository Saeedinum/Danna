const currencyFormat = (data) => {
	return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(data);
};

export default currencyFormat;