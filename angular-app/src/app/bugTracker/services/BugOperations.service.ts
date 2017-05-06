import { IBug } from '../models/IBug';

export class BugOperations{
	createNew(id : number, bugName : string) : IBug {
		var newBug : IBug = {
			id : id,
			name : bugName,
			isClosed : false 
		};
		return newBug;
	}

	toggle ( bug : IBug ) : void {
		bug.isClosed = !bug.isClosed;
	}
}