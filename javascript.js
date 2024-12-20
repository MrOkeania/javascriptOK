console.log("Javascript hello");
console.info("Javascript hello");
console.error("Javascript hello");
console.warn("Javascript hello");    
var m = "hak"
switch (m.length)
{
    case '*':
        console.log("4");
    break; 
    case 1:
        console.log("1");
    break;
    case 2:
        console.log("2");
    break;
    case 3:
        console.log("3");
    break;
    case 5:
        console.log("5");
    break;
}
console.log("Javascript hello");
var array = [0, 0, 0, 0, 0, 0, 9]
console.log(array)
console.log("Javascript hello");
for (var i = 0; i < 7; i++) {
console.log(i)
}
console.log("Javascript hello");
var j = 0 
while (j < 34)
{
    console.log(j);
    j--;
    console.log(j);
    j += 2;    
}
console.log("Javascript hello");
for (var i = 10; i <= 20; i+=2) {
    if (i > 16)
    break;// может использоватся как выход из цыкла
    console.log(i);
}
console.log("Javascript hello");
for (var i = 10; i <= 20; i++) {
    if (i % 2 == 0)
        continue;// не выполняет код с этим условием
    console.log(i);
}
var num1
var num2
var num3
var obj
    if(confirm('Hello This IS calculator. Do you want to use the calculator?'))
    {
        num1 = Number(prompt('write the first number'))
        num2 = Number(prompt('write the second number'))
        obj = prompt('White co z nimi zrobić')
        switch (obj)
        {
            case ('+'):
                num3 = num1 + num2;
            alert('answer: ' + (num3));
            break;
            case ('-'):
                num3 = num1 - num2;
            alert('answer: ' + (num3));
            break;
            case ('*'):
                num3 = num1 * num2;
            alert('answer: ' + (num3));
            break;
            case ('/'):
                num3 = num1 / num2;
            alert('answer: ' + (num3));
            break;
            case ('%'):
                num3 = num1 % num2;
            alert('answer: ' + (num3));
            break;
            case ('^'):
                num3 = num1 ** num2;
            alert('answer: ' + (num3));
            break;

        }
    }
    var arrey = [1,54000000,3,32,71]
     for (e = 0; e < arrey.length; e++) 
     {
        if (e > 0) {
        arrey[e] = arrey[(e-1)] + arrey[e]
        }
     }
console.log("Javascript hello");
console.log(arrey)
console.log(arrey[5])
var mat = [[1,2,4],[2,3],[4,1]]
for (var k = 0; k < mat.length; k++) {
    for (var s = 1; s < mat[k].length; s++ )
    {
        mat[k][0] += mat[k][s]
    }
    mat[k] = mat[k][0]
}
console.log(mat)
console.log(Math.max.apply(null, mat ))
console.log(Math.max(...mat))
console.log(Math.max(mat.join(',')))

var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] + nums[(i+1)] == target) 
            {
                return[i, (i+1)]
            }
    }
};
console.log(twoSum([3,2,3], 6))

var addTwoNumbers = function(l1, l2) {
   var l1r = l1.reverse();
   var l2r = l2.reverse();
   var lsr = []
   var ls = lsr.reverse();
   for (var i = 0; i < l1.length; i++)
   {
        lsr[i] = l1r[i] + l2r[i];
   }
   return ls
};

console.log(addTwoNumbers([1,2,3], [3,2,1]))

var isPrefixOfWord = function(sentence, searchWord) 
{
    var sen = sentence.split(" ") ;
    for (var i = 0; i < sen.length; i++)
    {
        if (String(sen[i]).search(searchWord) > -1) 
        {
            if (Array.from(String(sen[i]).matchAll(searchWord)).length < 2) {
            return i + 1 
            }
        }
    }
    return -1
};
var strie = 'burgr burgr'
console.log('burg' + strie.matchAll('burg').length)

console.log(isPrefixOfWord("i love eating burger", 'burg'))
console.log(isPrefixOfWord("i love eating burger", 'you'))
console.log(isPrefixOfWord("i love eating burgerburger", 'burg'))

var isPalindrome = function(x) {
    let xsp = String(x).split('')
        for (var i = 0, j = xsp.length; i < xsp.length, j > 0; i++ , j--)
        {
            if (xsp[i] != xsp[(j-1)])
            {
                return false
            }
        }
    return true
};

console.log(isPalindrome(-12021))

var equalFrequency = function(word) {
    let wsp = String(word).split('');
    let remove = 0;
    for (var i = 0; i < wsp.length; i++) {
            if (wsp[i] == wsp[(i+1)]) {
            wsp.splice(i, 1)
            remove++
        }
    };
    if (remove == 1) {
        return true
    } else {
        return false
    }
}
    
console.log(equalFrequency('sllaa'))

var minimumSize = function(nums, maxOperations) {
    let nums1 = []
    let nums2 = []
for (let p = 0; p < nums.length; p++) 
    {
        nums1.push(nums[p])
        nums2.push(nums[p])
    }
for (let i = 0; i < maxOperations; i++) 
    {
    let max = nums1.indexOf(Math.max(...nums1))
    let s = (nums1[max] - (nums1[max] % 2)) / 2
        if (nums1[max] % 2 != 0) {
            nums1[max] =[s, s + (nums1[max] % 2)]
            nums1 = nums1.flat()
        } else {
            nums1[max] = [s, s]
            nums1 = nums1.flat()
        }
    } // x, x + r
for (let i = 0; i < maxOperations; i++) 
    {
    let max = nums2.indexOf(Math.max(...nums2))
    let s = (nums2[max] - (nums2[max] % 2)) / 2
        if (nums2[max] % 2 != 0) {
            nums2[max] =[s - (nums2[max] % 2), s + ((nums2[max] % 2) * 2)]
               nums2 = nums2.flat()
           } else {
            nums2[max] = [s, s]
            nums2 = nums2.flat()
        }
        }    
 // x - r, x + r + r
        let answer1 = (Math.min(...nums1))
        let answer2 = (Math.min(...nums2))
    if(answer1 < answer2) {
        return answer2
    } else {return answer1}
}
console.log(minimumSize([9], 2))

var decrypt = function(code, k) {
    let pass = []
  for(var i = 0; i < code.length; i++) {
    if (k > 0) {
        let sum = 0
        let o = Number(i);
        let c = 0;
            while (c < k) {
                
                if ((o + 1) >= code.length) {
                    console.log('if' + o + i + ' sum ' + sum + ' ' + code[o])
                    o = 0
                    sum += code[o]
                    console.log('if' + o + i + ' sum ' + sum + ' ' + code[o])
                    c++
                } else {
                    sum += code[(o + 1)]
                    console.log('el' + o + i + ' sum ' + sum + ' ' + code[o+1])
                    
                    c++
                    o++
                }
            };
        pass.push(sum)
    }  else if (k < 0) {
        let sum = 0
        let o = Number(i);
        let c = 0;
        while (c < -k) {
                if ((o - 1) == -1) {
                    o = code.length - 1
                    sum = sum + code[o]
                    c++
                } else {
                    sum += code[(o - 1)]
                    c++
                    o--
                }
            };
        pass.push(sum)
    } else if (k == 0) {
        pass.push(0)
    }
    console.log('----------------')
  }  
  return pass
};

console.log(decrypt([1, 2, 2, 1], 3))

var filter = function(arr, fn) {
  var filteredArr = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i).constructor === Boolean) {
        if (fn(arr[i], i)) filteredArr.push(arr[i] * Number(fn(arr[i], i)))
    }
     else if (fn(arr[i], i).constructor === Number) {
        filteredArr.push(fn(arr[i], i))
      }
}
  return filteredArr
};

var reduce = function(nums, fn, init) {
    if (nums.length > 0) {
        for (let i = 0; i < nums; i++) {
            console.log(init)
            init = fn(init, nums[i])
        }
        return init
    } else {
        return init
    }
};