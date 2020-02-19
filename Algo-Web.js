function bubblesort(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    void bubblesort(int a[], int length)
    {
        int i,j,temp,flag;
        for(i=0;i<length-1;i++)
        {
            flag=1;
            for(j=0;j<length-i-1;j++)
            {
                if(a[j] > a[j+1])
                {
                    temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                    flag=0;
                }
                if(flag==1) break;
            }
        }
    }
   </xmp></pre>`       
};

function insertionsort(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    void insertionsort(int a[], int length)
    {
        int i,j,val;
        for(i=1;i<length;i++)
        {
            val=a[i];
            for(j=i-1;j>=0;j--)
                if(val<a[j])
                    a[j+1]=a[j];
                else
                    break;
    
            a[j+1]=val;
        }
    }
    
   </xmp></pre>`       
};

function lcs(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
#include<stdio.h>
#include<string.h>

void printlcs( int i, int j, char x[100], char direction[100][100])
{
    

    // if(i==0 || j==0) 
    //     return;
    // else if(direction[i][j]=='d')
    // {
    //     printlcs(i-1,j-1,x,direction);
	// 	printf("%c",x[i-1]);
    // }
    // else if (direction[i][j]=='u')
    //     printlcs(i-1,j,x,direction);
    // else    
    //     printlcs(i,j-1,x,direction);
}

void lcs(char x[100], char y[100])
{
    int i,j,xlength,ylength;
    xlength=strlen(x);
    ylength=strlen(y);
    
    int val[xlength+1][ylength+1];
    char direction[xlength+1][ylength+1];
    
    for(i=0;i<xlength+1;i++)
        val[i][0]=0;
    for(j=0;j<ylength+1;j++)
        val[0][j]=0;
    
    for(i=1;i<xlength+1;i++){
        for(j=1;j<ylength+1;j++)
        {
            if(x[i-1]==y[j-1]){
                val[i][j]=val[i-1][j-1]+1;
                direction[i][j]='d';//d for diagonal element + 1
            }
            else
            if(val[i][j-1]>=val[i-1][j]){
                val[i][j]=val[i][j-1];
                direction[i][j]='l';//l for from left element
            }    
            else
            {
                val[i][j]=val[i-1][j];
                direction[i][j]='u';//u for from upper element
            }
        }
    }

    // for(i=0;i<xlength+1;i++){
    //     for(j=0;j<ylength+1;j++)
    //         printf("%d  ",val[i][j]);
    //     printf("\n");
    // }
    // for(i=1;i<xlength+1;i++){
    //     printf("   ");
    //     for(j=1;j<ylength+1;j++)
    //         printf("%c  ",direction[i][j]);
    //     printf("\n");
    // }

    printlcs(xlength+1,ylength+1,x,direction);
}

void main()
{
	char x[100],y[100];
	printf("enter string x : ");
	gets(x);
	printf("enter string y : ");
	gets(y);
	lcs(x,y);
}

    
   </xmp></pre>`       
};


