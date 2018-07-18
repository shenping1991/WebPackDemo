// import _ from 'loadsh';
module.exports=function(){
	var component=document.createElement('div');
	component.textContent="您好！1234";
	//component.innerHTML = _.join(['Hello', 'webpack'], ' ');
	return component;
};
