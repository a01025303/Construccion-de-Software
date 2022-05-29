using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy2 : MonoBehaviour
{
    [SerializeField] private float moveSpeed;
    private SpriteRenderer sp;
    private Transform playerTrans;
    // Start is called before the first frame update
    void Start()
    {
        sp = GetComponent<SpriteRenderer>();
        playerTrans = GameObject.FindGameObjectWithTag("Main Character").GetComponent<Transform>();
    }

    // Update is called once per frame
    void Update()
    {
        transform.position = Vector2.MoveTowards(transform.position, playerTrans.position, moveSpeed * 2 * Time.deltaTime);
        if(playerTrans.position.x >= transform.position.x)
            sp.flipX = false; 
        if(playerTrans.position.x < transform.position.x)
            sp.flipX = true;
    }
}
