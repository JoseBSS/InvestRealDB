<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\UserXp;
use App\Xp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\RegistersUsers;
use Laravel\Passport\HasApiTokens;
use function GuzzleHttp\json_decode;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use HasApiTokens,RegistersUsers;



    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {

    return Validator::make($data, [
    'name' => ['string', 'max:255'],
    'last_name' => ['string', 'max:255'],
    'username' => ['required', 'string', 'min:3', 'max:16', 'unique:users'],
    'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
    'password' => ['required', 'string', 'min:8', 'confirmed'],
    'phone' => ['string', 'max:255'],
    // 'appverification' => ['min:1'],

        ]);


    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
     {



         User::create([
            'name' => $data['name'],
            'last_name' => $data['last_name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'phone' => '+'.$data['phone'],
            'qr_token' => Hash::make($data['email'].'create_at'),
            'appverification' => $data['appverification'],
        ]);







    }
    // /**
    //  * Handle a registration request for the application.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new registered($user = $this->create($request->all())));
        // dd($request);

        return response()->json("Succes", 200);

        // $this->guard()->login($user);

        // return $this->registered($request, $user)
        //                 ?: redirect($this->redirectPath());
    }


}
