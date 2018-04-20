module.exports = function main() {
    var str='';
    for(var i=99 ; i>0 ; i--) {
        if(i == 1){
            str +='    '+ i + ' bottle of beer on the wall, ' + i + ' bottle of beer.\n'
            str += '    Take one down and pass it around, no more bottles of beer on the wall.\n'+'    No more bottles of beer on the wall, no more bottles of beer.\n'+'    Go to the store and buy some more, 99 bottles of beer on the wall.';
            continue;
        }
        str +='    '+ i + ' bottles of beer on the wall, ' + i + ' bottles of beer.\n';

        if(i ==2){
            str += '    Take one down and pass it around, ' + (i - 1) + ' bottle of beer on the wall.\n';
        }
        else{
            str += '    Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.\n';
        }



    }

    console.log(str);
    return 'Hello World!';
};