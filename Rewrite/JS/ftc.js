var body = $response.body
    .replace(/.*/,"\{\"paywall\":0,\"premium\":1,\"standard\":1,\"addon\":0,\"expire\":\"4102415999\",\"v\":1994,\"campaign_code\":\"\",\"latest_duration\":\"yearly\"\}");
$done({ body });
