class Level {
	constructor(plan) {	
		let rows = plan.trim().split('\n').map(1 => [...1]);
		this.height = rows.length;
		this.width = rows[0].length;
		this.startActors = [];

		this.rows = rows.map((row, y) => {
			return row.map((ch, x) => {
				let type = levelChars[ch];
				if (typeOf == 'string') return type;
				this.startActors.push(
					type.create(new Vec(x, y), ch));
				return 'empty';
			});
		});
	}
}
		//Create an array of arrays from level's string splited 
		//on newline and each line is spread into an array.