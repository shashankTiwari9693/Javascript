var ar=[
["harry",13,"male","bcs","maths"],
["rry",13,"male","bcs"],
["ha",13,"male","bcs"],
["hari",13,"male","bcs"],
["hari",13,"male","bcs"]
];

ar[0][1]=prompt("enter the no");
document.write("<table border='1px' >");
for(var a=0;a<ar.length;a++)
{
    document.write("<tr>");
    for(var b=0;b<ar.length;b++)
    {
    document.write("<td>"+ar[a][b]+"</td>");
    }

    document.write("<br>");
    document.write("</tr>");
}

document.write("</table>");
