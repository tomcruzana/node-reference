var	util	=	require('util');
console.log(util.isArray([]));	//	true
You sent Yesterday at 11:26 PM
console.log(util.isArray({	length:	0	}));	//	false console.log(util.isDate(new	Date()));	//	true console.log(util.isDate({}));	//	false console.log(util.isError(new	Error('This	is	an	 error')));	//	true console.log(util.isError({	message:	'I	have	a	message'	 }));	//	false
You sent Yesterday at 11:26 PM
util	Module The	util	module	contains	a	number	of	useful	functions	that	are	general purpose.	You	can	access	the	util	module	using	a	require('util')	call.
To	log	out	something	to	the	console	with	a	timestamp,	you	can	use	the util.log	function,	as	shown	in	Listing	3-42.
Listing	3-42.	core/util/log.js var	util	=	require('util');
util.log('sample	message');	//	27	Apr	18:00:35	-	 sample	message Another	extremely	useful	feature	is	string	formatting	using	the util.format	function.	This	function	is	similar	to	the	C/C++	printf function.	The	first	argument	is	a	string	that	contains	zero	or	more	placeholders.
Each	placeholder	is	then	replaced	using	the	remaining	arguments	based	on	the meaning	of	the	placeholder.	Popular	placeholders	are	%s	(used	for	strings)	and %d	(used	for	numbers).	These	are	demonstrated	in	Listing	3-43.
Listing	3-43.	core/util/format.js var	util	=	require('util');
var	name	=	'nate';
var	money	=	33;
//	prints:	nate	has	33	dollars console.log(util.format('%s	has	%d	dollars',	name,	 money));
Additionally,	util	has	a	few	functions	to	check	if	something	is	of	a particular	type	(isArray,	isDate,	isError).	These	functions	are demonstrated	in	Listing	3-44.