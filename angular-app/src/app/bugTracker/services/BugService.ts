import { IBug } from '../models/IBug';

export class BugService{
	createNew(bugName : string) : IBug {
		var newBug : IBug = {
			name : bugName,
			isClosed : false 
		};
		return newBug;
	}

	toggle ( bug : IBug ) : void {
		bug.isClosed = !bug.isClosed;
	}
}