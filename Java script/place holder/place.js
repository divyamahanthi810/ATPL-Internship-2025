const users = [
      { name: "John", age: 25 },
      { name: "Rita", age: 22 },
      { name: "Sam", age: 30 }
    ];

    const container = document.getElementById("cardContainer");

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${user.name}</h3><p>Age: ${user.age}</p>`;
      container.appendChild(card);
    });