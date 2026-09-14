# 디렉터리 만들기

`cd`와 마찬가지로 `mkdir`로 디렉터리를 만드는 가장 간단한 방법은 이름만 입력하는 것입니다. `mkdir my_cool_directory`는 현재 작업 디렉터리 안에 `my_cool_directory`를 만듭니다.

파일 경로를 사용하면 다른 디렉터리 안에 만들거나 여러 디렉터리를 한 번에 만들 수 있습니다. `mkdir <%= `${formatPathPartsForOs('my_cool_directory', 'my_cooler_directory')}`%>`는 먼저 `cd`하지 않아도 `my_cool_directory` 안에 새 디렉터리를 만듭니다. 하지만 `directory1`이 없을 때 `mkdir <%= `${formatPathPartsForOs('directory1', 'directory2')}`%>`를 실행하면 오류가 납니다. `-p` 플래그를 붙인 `mkdir -p <%= `${formatPathPartsForOs('directory1', 'directory2')}`%>`는 두 디렉터리를 모두 만듭니다.

`..`를 이용해 상위 디렉터리에도 만들 수 있습니다. `mkdir <%= `${formatPathPartsForOs('..', 'directory3')}`%>`는 현재 작업 디렉터리의 상위 디렉터리에 `directory3`을 만듭니다.

지금까지는 현재 작업 디렉터리를 기준으로 만들었습니다. 루트 디렉터리에서 시작하는 절대 경로를 사용하면 시스템 어디에나 디렉터리를 만들 수 있고, `~`로 시작하면 홈 디렉터리를 기준으로 만들 수 있습니다.
