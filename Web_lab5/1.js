function Task1()
{
	let x=6, y=15, z=4;
	x += y-x++*z
    console.log('x= ', x)
    z = --x - y * 5
    console.log('z= ', z)
    y /= x + (5 % z)
    console.log('y= ', y)
    z = x++ + y * 5
    console.log('z= ', z)
    x = y - x++ * z
	console.log('x=',x);
}

function Task2()
{
	let a=2, b=10, c=7;
	let result;
	result=(a+b+c)/3;
	console.log('a=',a,' b=',b,' c=',c,' average=',result)
}

function Task3()
{
	let r=prompt('Введите радиус: '),h=prompt('Введите высоту: ');
	let V=Math.PI*Math.pow(r,2)*h,S=2*Math.PI*r*h+2*Math.PI*Math.pow(r,2);
	console.log('V=',V,'\nS=',S)
}

function Task4()
{
	let a=prompt('Введите a: '),b=prompt('Введите b: '),res=0;

	if (+a<+b)
	{
		while (+a<+b)
		{
			
			if(+a%2)
				console.log('\n',a);
			a++;
			if (+a<+b)res+=+a;
		}
	}
	else if(+a>+b)
	{
		while (+a>+b)
		{
			if(+b%2)
				console.log('\n',b);
			b++;
			if (+a>+b)res+=+b;
		}
	}
	console.log('\nsum=',res)
}

function Task5()
{
	let x = prompt('Введите число ', '')
	let x1=+x;
	let res = 1;
    while (x--) res *= x + 1;

	console.log('\nФакториал числа ',x1,' = ',res)

}

function Task6() {
  for (let i = 0; i < 4; i++) 
  {
    for (let j = 0; j < 10; j++) 
	{
      document.write('*\n')
    }
    let br = document.createElement('br')
    document.body.appendChild(br)
  }
  document.write('<p></p>')

  for (let i = 0; i< 8; i++) 
  {
    for (let j = 0; j < i + 1; j++) 
	{
      document.write('*\n')
    }
    document.write('<br>')
  }
  document.write('<p></p>')

  var line = 8 // Quantity of lines
  var space = 7 // Quantity of gaps in the first line
  var star = 1 // Quantity of stars in the first line

  for (let i = 0; i < line; i++) 
  {
    for (let j = 0; j < space; j++) 
	{
		document.write('&nbsp\n')
    }
    for (let k = 0; k < star; k++) 
	{
		document.write('*')
    }
      space -= 1
      star += 2
      document.write('<br>')
    }
    document.write('<p></p>')

    let size = 12
    let center = size / 2

    for (let i = 0; i < size; i++) 
	{
      for (let j = 0; j < size; j++) 
	  {
        if (i <= center) 
		{
          //верхняя половина
          if (j >= center - i && j <= center + i) document.write('*')
          else document.write('&nbsp')
        } else {
          //нижняя половина
          if (j >= center + i - size + 1 && j <= center - i + size - 1)
            document.write('*')
          else document.write('&nbsp')
        }
      }
      document.write('<br>')
    }
  }

function Task7()
{
	
	let N=10,arr=[],big,small,sum=0,average=0;
	for (i = 0; i < N; i++) 
	{
      let a = Math.round(Math.random() * 100)
      arr[i]=+a;
	  average+=+arr[i];
	  if (i)
	  {
		if (+arr[i]>+big)
			big=+arr[i];
		if (+arr[i]<+small)
			small=+arr[i];
	  }
	  else
	  {
		  big=+arr[i];
		  small=+arr[i];
	  }
    }
	sum=+average;
	average/=+N;
	console.log('Массив: ')
	console.log(arr)
	console.log('\nmin: ',+small)
	console.log('\nmax: ',+big)
	console.log('\nsum: ',+sum)
	console.log('\naverage: ',+average)
}

function Task8()
{
	let n=5, arr=[],txt='';
	for (i=0; i<n; i++)
	{
		arr[i]=[];
		for (j=0; j<n; j++)
		{
			let a =Math.round(Math.random() * 100-50)
			arr[i][j]=+a;
		}
	}
	console.log('Массив: ')
	for (i=0; i<n; i++)
	{
		for (j=0; j<n; j++)
			txt+=arr[i][j]+ ' '
		txt+='\n'
	}
	console.log(txt);
	for (i=0; i<n; i++)
	{
		if (arr[i][i]>0) arr[i][i]=1
		if (arr[i][i]<0) arr[i][i]=0
	}
	console.log('Массив после изменений: ')
	console.log(arr)
}

function Add(a,b)
{
	let res=+a+(+b)
	return res;
}

function Sub(a,b)
{
	let res=+a-+b
	return res;
}

function Mul(a,b)
{
	let res=+a*+b
	return res;
}

function Div(a,b)
{
	if(a!=0 && b!=0)
	{
	let res=+a/+b
	return res;
	}
	else return'0 и на 0 делить нельзя!'
}

function Task9()
{
	let a=document.createElement("input")
	a.id = "first";
    a.type = "number";
	a.placeholder="first num";
    document.body.appendChild(a)
	
	let l=document.createElement("div")
	l.innerHTML=""
	document.body.appendChild(l)
	
	let op1=document.createElement("input")
	op1.type = "radio";
	op1.id = "Add";
	op1.name = "chs_operation"
    document.body.appendChild(op1)
	
	let l1=document.createElement("b")
	l1.innerHTML="+  "
	document.body.appendChild(l1)
	
	let op2=document.createElement("input")
	op2.type = "radio";
	op2.id = "Sub";
	op2.name = "chs_operation"
    document.body.appendChild(op2)
	
	let l2=document.createElement("b")
	l2.innerHTML="-"
	document.body.appendChild(l2)
	
	let op3=document.createElement("input")
	op3.type = "radio";
	op3.id = "Mul";
	op3.name = "chs_operation"
    document.body.appendChild(op3)
	
	let l3=document.createElement("b")
	l3.innerHTML="*"
	document.body.appendChild(l3)
	
	let op4=document.createElement("input")
	op4.type = "radio";
	op4.id = "Div";
	op4.name = "chs_operation"
    document.body.appendChild(op4)
	
	let l4=document.createElement("b")
	l4.innerHTML="/"
	document.body.appendChild(l4)
	
	let l00=document.createElement("div")
	l00.innerHTML=""
	document.body.appendChild(l00)
	
	let b=document.createElement("input")
	b.id = "second";
    b.type = "number";
	b.placeholder="second num";
    document.body.appendChild(b)

	let l0=document.createElement("div")
	l0.innerHTML=""
	document.body.appendChild(l0)
	
	let but=document.createElement("input")
	but.id = "sbmt";
    but.type = "Submit";
	
	document.body.appendChild(but)
	
	but.onclick=() =>{
		let res,znak;
	
	var ele=document.getElementsByName('chs_operation');
	
	for(i = 0; i < ele.length; i++) 
	{
        if(ele[i].checked)
		{
            if (ele[i].id=='Sub') alert(Sub(a.value,b.value));
			if (ele[i].id=='Mul') alert(Mul(a.value,b.value));
			if (ele[i].id=='Add') alert(Add(a.value,b.value));
			if (ele[i].id=='Div') alert(Div(a.value,b.value));
		}
	}
	}
	
	
}

function Task10()
{
	let a=document.createElement("input")
	a.id = "nuber";
    a.type = "number";
	a.placeholder="insert nuber";
    document.body.appendChild(a)
	
	let but=document.createElement("input")
	but.id = "sbmt";
    but.type = "Submit";
	but.value='chek chislo'
	
	document.body.appendChild(but)
	
	let otvet="";
	
	but.onclick=() =>{
		if (a.value>=0) otvet+="Число положительное, "
		else otvet+="Число отрицательное, "
		
		if (Math.pow(a.value,2)%24==1||a.value==2 ||a.value==3) otvet+="простое\n"
		else otvet+="не простое\n"
		
		if (a.value%2==0) otvet+="делится на 2 без остатка\n"
		else otvet+="не делится на 2 без остатка\n"
		
		if (a.value%3==0) otvet+="делится на 3 без остатка\n"
		else otvet+="не делится на 3 без остатка\n"
		
		if (a.value%5==0) otvet+="делится на 5 без остатка\n"
		else otvet+="не делится на 5 без остатка\n"
		
		if (a.value%6==0) otvet+="делится на 6 без остатка\n"
		else otvet+="не делится на 6 без остатка\n"
		
		if (a.value%9==0) otvet+="делится на 9 без остатка\n"
		else otvet+="не делится на 9 без остатка\n"
		
		alert(otvet);
		otvet="";
	}
	
}


Task10();