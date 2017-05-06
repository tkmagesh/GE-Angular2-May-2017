import { IBug } from '../models/IBug';

export class BugOperations{
	createNew(id : number, bugName : string) : IBug {
		var newBug : IBug = {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}

	toggle ( bug : IBug ) : void {
		bug.isClosed = !bug.isClosed;
	}
}