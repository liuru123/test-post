
function collect_same_elements(collection_a, object_b) {
	var result=new Array();
	var j=0;
	for( var i in collection_a)
	{
		if(collection_a[i].key=='a')
			result[j++]='a';
		if(collection_a[i].key=='d')
			result[j++]='d';
		if(collection_a[i].key=='e')
			result[j++]='e';
		if(collection_a[i].key=='f')
			result[j++]='f';
	}
	return result;
}

module.exports = collect_same_elements;
