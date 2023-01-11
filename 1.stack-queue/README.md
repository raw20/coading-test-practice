# 1주차 스택 & 큐

### 💻 개념

- 스택 : 한 쪽 끝에서만 자료를 넣거나 뺄수 있는 선형구조(LIFO)로 되어 있다. 즉 나중에 넣은 값이 먼저 나오는 구조이다.
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/450px-Data_stack.svg.png" width="280" height="400"/>

- 큐 : 스택과 반대 개념으로 리스트 양쪽에서 접근이 가능하고 먼저 넣은 값이 먼저 나오는 FIFO 구조이다.
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/330px-Data_Queue.svg.png" width="280" height="400"/>

### 🔑 문제 풀이

#### P03 (다리를 지나는 트럭)

    모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성.

    (프로그래머스 코딩테스트 연습>스택/큐>다리를 지나는 트럭 참고)

    - 쓰여진 함수
        1. Array.from (유사 배열이나 반복 가능한 객체를 얕게 복사해 새로운 배열로 만들어줌)
        2. Array.shift (배열 첫번째 요소를 제거하고 그 제거된 값을 반환)

    - 어떻게 풀었는가
       1. solution 함수의 매게변수로 주어진 bridge_length를 이용해 Array.from함수로 0으로 채워진 배열을 다리 길이만큼 만든다. 이 배열을 bridge라고 변수로 지정했다.
       에를 들면
       Array.from({ length: 4 }, () => 0); 라고 하면
       길이가 4이고 각 배열 원소 0인 [0,0,0,0]이 생성

       2. 첫 번째 트럭이 다리에 들어오기 전에
        bridge 배열을 shift후 다리를 지날 예정인 truck_weights 배열의 첫번째 원소를 push해준다.

        예를 들어 bridge = [0,0,0,0] truck_weights=[10,5] 라 가정하면
        첫 번째 트럭이 들어가기전 bridge.shiht를 안해주고 push하게 되면 [0,0,0,0,10] 이 되어버리기 때문에
        shiht를 해줘서 맨 앞에 0을 없애고 push를 해줘야 다리길이 만큼 배열의 길이가 유지된다.

        3.트럭이 다리에 들어갔으면 bridge_weight = 0 라는 변수를 만들어 0으로 초기화하고 truck_weights배열을 shiht해서 반환된 값을 더하기 할당을 해준다. 그 후 횟수를 count 해준다.

        4. 하지만 트럭이 항상 다리를 건널수 있는것이 아니다. 첫번째 트럭이 건너고 있고 두번 째 트럭이 건너기 전에 다리가 감당할수 있는 weight가 건너고 있는 트럭들의 무게합보다 크거나 같아야 한다.

        그래서 while문을 사용해 bridge.length > 0 이라는 조건이 충족할때까지 특정 조건을 반복해준다.


        5. 조건 1 - 현재 건너고 있는 트럭들의 무게 + 대기중인 트럭의 무게 > 다리가 감당할수 있는 무게

        이럴땐 대기중이던 트럭이 다리를 건너면 안되기 때문에 bridge.push(0)을 해준다.

        6. 조건 2 - 트럭들의 무게 + 대기중인 트럭의 무게 <= 다리가 감당할수 있는 무게

        truck_weights[0]를 해주고
        bridge_weight와 truck_weights배열을 shiht해서 반환된 값을 더하기 할당을 해준다.


        7.  대기중인 트럭이 없을경우

        그냥 다른 트럭이 다 건널때 까지 count작업만 해주면 된다.

        대기중이던 트럭이 다 다리에 건너고 있으면 push하는 값은 없고 bridge는 계속 shift가 되기때문에 모든 트럭이 다리를 다 건너면 결국은 bridge의 길이는 0이 되어버리기 때문에 반복문을 끝낼수 있다.

    - 어디서 막혔는가

        1. 현재 다리를 건너고 있는 트럭들의 합을 어떻게 처리해야할지 고민이 많았었다.

        2. 반복문이 무한 루프에 빠졌었다. 처음에  for문을 쓰다가 무한루프에 빠져 while문으로 바꾸었다.


