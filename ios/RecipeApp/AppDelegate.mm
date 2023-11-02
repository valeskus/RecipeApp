#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"RecipeApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge 
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps
{
  RCTRootView * rootView = (RCTRootView*)[super createRootViewWithBridge:bridge moduleName:moduleName initProps:initProps];
  
  UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:[NSBundle mainBundle]];
  rootView.loadingView = [[storyboard instantiateViewControllerWithIdentifier:@"viewController"] view];
  
  return rootView;
}


@end
