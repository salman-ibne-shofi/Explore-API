function loadUsers2() {
	fetch("https://jsonplaceholder.typicode.com/")
		.then((res) => res.json())
		.then((data) => console.log(data));
}
