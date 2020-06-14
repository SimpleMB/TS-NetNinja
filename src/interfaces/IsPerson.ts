// Interfaces

export default interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}