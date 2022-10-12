// include <stdio.h> 
// #include <time.h>

// #define N 10
//  void arr_make(int arr[], int min, int max);
//   int main () { int arrI[N], i; 
//      arr_make(arrI, 30, 90);
//       for (i=0; i<N; i++) printf("%d ", arrI[i]); printf("\n"); } 
//        void arr_make(int arr[], int min, int max) { int i; 
//         srand(time(NULL)); 
//          for (i=0; i<N; i++) arr[i] = rand() % (max - min + 1) + min; }

// #include <stdio.h>
// #include <time.h> .
// #define N 10 
//  void arr_make(int *arr, int min, int max); void arr_inc_dec(int arr[], char sign); void arr_print(int *arr);
//   int main () { int arrI[N], i, minimum, maximum; char ch;
//      printf("Enter minimum & maximum: "); scanf("%d %d", &minimum, &maximum); arr_make(arrI, minimum, maximum); arr_print(arrI);
// var currentCount = 1;

// function makeCounter() { return function ()

// return currentCount++;
// } 
// }

// var counter = makeCounter(); var counter2 = makeCounter();

// alert(counter());

// alert(counter());

// alert(counter2());

// alert(counter2());
const arr = ["нурай", "алия", "аймкан", "касиет", "айгул"];
function arrayPick(string, array){
     for(let i = 0; i < array.length; i++){
        if(string == array[i]){
            return console.log(array[i], 'найден');
        }
     }
}
// console.log(arr[2]);
let str = prompt('Введите имя')
arrayPick(str, arr)