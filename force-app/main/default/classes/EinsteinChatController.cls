public with sharing class EinsteinChatController {
    @AuraEnabled(cacheable=false)
    public static String sendMessage(String prompt) {
        // TODO: Replace with actual Salesforce AI call (e.g., Einstein GPT)
        // For now, return a placeholder response.
        return 'Einstein response to: ' + prompt;
    }
}
