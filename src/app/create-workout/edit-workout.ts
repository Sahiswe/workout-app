export class Workout{
    static counter:number=100006;
   // private int _id;
	//private String workoutTitle;
    _id: number;
    workoutTitle: String;

    constructor(){
        Workout.counter++;
        this._id=Workout.counter;

    }
}