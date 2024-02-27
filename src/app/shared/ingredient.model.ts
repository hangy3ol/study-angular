export class Ingredient {
	// 기본형태 클래스 
	// public name: string;
	// public amount: number;
	// constructor(name: string, amount: number) {
	// }

	// ts숏컷 형태 클래스 - 접근제어, 타입을 생성자에서 동시에 선언
	constructor(public name: string, public amount: number) {}
}