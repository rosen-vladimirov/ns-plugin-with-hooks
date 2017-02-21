# ns-plugin-with-hooks
Used for testing hooks execution.

## Using with AppBuilder
```
$ appbuilder create native app1 --template HelloWorld
$ appbuilder plugin add ns-plugin-with-hooks --path app1
$ appbuilder deploy android --path app1
```

In case hooks are working you'll find several changes in the running application:
1. Top ActionBar will contain the following information `Hooks replaced your ActionBar`.
2. Button content will be `Hooks everywhere, tap or not, they'll get you`.
3. When starting the application, in the device logs you'll notice the following message: `ViewModel is created by your Hooks. You are out of control now.`.
4. When tapping the button you'll see the following line in the device logs: `You've tapped on the Hooks Button. Remaining taps: ${some number}`.
5. When all 42 taps are done, on device you'll see: `Hoorraaay! You have been caught by NativeScript CLI's hooks!`.
6. Additional hooks.txt file will be created in the built application (.apk, .ipa). The content will be: `Hooks created this file for you.`. It's location is:
`<unzipped .apk>/assets/app/hooks.txt` for Android builds and `<unzipped .ipa>/Payload/NativeScript250/app/hooks.txt` for iOS builds.

In case hooks are not working, none of the above will work.
