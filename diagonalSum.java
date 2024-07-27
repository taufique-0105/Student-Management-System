package Arrays.Array_2D;

import java.util.Scanner;

public class diagonalSum {
  public static void main(String[] args) {
    int matrix[][];
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the number of rows and columns:");
    System.out.print("Rows:");
    int row = sc.nextInt();
    System.out.print("Colomns:");
    int columns = sc.nextInt();

    matrix = new int[row][columns];

    System.out.println("Enter the values in the matrix:");

    for(int i = 0; i < row; i++) {
    for(int j = 0; j < columns; j++) {
    System.out.print("Matrix ("+i+","+j+") = ");
    matrix[i][j] = sc.nextInt();
    }
    }

    int sum1 = rightDiagonal(matrix,row,columns);
    int sum2 = leftDiagonal(matrix,row,columns);
    System.out.println("Sum of the diagonal elements of the matrix is " + (sum1+sum2));
    sc.close();
  }
  public static int rightDiagonal(int matrix[][],int row,int columns) {
    int sum = 0;
    for(int i = 0; i < row; i++) {
      sum += matrix[i][i]; 
    }
    return sum;
  }
  public static int leftDiagonal(int matrix[][],int row,int columns) {
    int sum = 0;
    for(int i = 0; i < row; i++) {
      sum += matrix[i][row-i-1];
    }
    return sum;
  }
}
