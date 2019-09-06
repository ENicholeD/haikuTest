export class HaikuChecker{
  constructor(firstSentence){
    this.firstSentence = firstSentence;
    // this.secondSentence = secondSentence;
    // this.thirdSentence = thirdSentence;
  }

  vowelCount() {
    let vowelList = 'aeiouAEIOU';
    let vCount = 0;
    const haiku = this;

    for(var i=0; i < haiku.firstSentence.length; i++) {
      if (vowelList.indexOf(haiku.firstSentence[i])!== -1)
      {
        vCount += 1;
      }
    }
    // console.log(vCount["dog"]);
    return vCount;
  }
}
