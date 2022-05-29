using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMove : MonoBehaviour
{
    public Rigidbody2D rigidB2D; 
    public Camera theCam; 
    Vector3 movement; 
    public Animator animator; 

    //public bool useControl; 
    void Start()
    {
        theCam = Camera.main;
        rigidB2D = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        movement = new Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0.0f);

        animator.SetFloat("Horizontal", movement.x);
        animator.SetFloat("Vertical", movement.y);
        animator.SetFloat("Magnitude", movement.magnitude);

        transform.position = transform.position + movement * Time.deltaTime;

        //rigidB2D.velocity = movement; 


        Vector3 mouse = Input.mousePosition; 
        Vector3 screenPoint = Camera.main.WorldToScreenPoint(transform.localPosition); 
        Debug.Log(movement);
    }

    void freeze()
    {
        animator.SetFloat("Horizontal", 0.0f);
        animator.SetFloat("Vertical", 0.0f);
        animator.SetFloat("Magnitude", 0.0f);
    }
}
